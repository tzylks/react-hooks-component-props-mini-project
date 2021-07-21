
import Article from "./Article"


function ArticleList({ blogData }) {
    console.log(blogData)
    let articleMap = blogData.posts.map(article => {
        return <Article title={article.title} name={article.name} date={article.date} minutes={article.minutes} preview={article.preview} key={article.id} />
    })


    return (
        <main>
            {articleMap}
        </main>
    )
}

export default ArticleList