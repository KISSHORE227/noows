export async function fetchNews() {

  try {
    const res = await fetch("http://127.0.0.1:8000/news");

    const data = await res.json();

    console.log("REACT RECEIVED:", data);

    return data.articles;

  } catch (error) {
    console.error(error);
    return [];
  }
}

 export function transformNews(data) {

    return data.map(( data, index) => ({

        id: index + 1,

        title: data.title || "No title",

        summary: data.description || "No summary available",

        whyItMatters:
            data.content?.slice(0, 100) ||
            "Details unavailable",

        context:
            data.context,

        whatsNext:
            "More updates expected soon.",

        readingTime: 30,

        source: data.source?.name || "Unknown",

        saved: false,

    }));

}