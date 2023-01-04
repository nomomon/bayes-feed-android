import { RawPost } from '../interface/RawPost';
import parser from 'react-native-rss-parser';

const cleanDescription = (description: string) => {
    // Remove HTML tags from postDescription
    description = description.replace(/<[^>]*>?/gm, '');
    description = description.replace(/&[^;]*;?/gm, ' ');

    // Remove Читать далее from postDescription
    description = description.replace(/Читать далее*/, '');

    // Remove everything after [link] [comments] from postDescription
    description = description.replace(/\[link\].*/, '');
    description = description.replace(/\[comments\].*/, '');

    description = description.trim();

    return description;
}

const getFeed = async (rss: string | string[]) => {
    const feed: RawPost[] = [];

    if (typeof rss === 'string') {
        rss = [rss];
    }

    for (let i = 0; i < rss.length; i++) {
        await parseRSS(rss[i])
            .then(posts => feed.push(...posts))
    }

    return feed;
}

const parseRSS = async (rss: string): Promise<RawPost[]> => {
    return fetch(rss)
        .then(res => res.text())
        .then(res => parser.parse(res))
        .then(async (feed) => {
            const itemsArray = feed.items || [];

            if (itemsArray.length === 0) {
                return [];
            }
            const sourceName = feed.title || '';
            const output = [];
            for (let i = 0; i < itemsArray.length; i++) {
                const item = itemsArray[i];

                const link = item.links[0].url || '';
                const title = item.title || '';
                const description = cleanDescription(
                    item.description ||
                    item.content ||
                    item['content:encoded'] || '');

                // const imageSrc = item.enclosures[0].url || '';

                const lang = (title + description).match(/[а-яА-ЯёЁ]/) ? 'ru' : 'en';

                const post = {
                    sourceName: sourceName,
                    link: link,
                    postName: title,
                    postDescription: description,
                    imageSrc: "",
                    lang: lang,
                    score: 0
                };
                output.push(post);
            }
            return output;
        })
        .catch(() => {
            return [];
        });
}

export default getFeed;