import { getPostBySlug } from 'lib/api'
import Container from 'next-react-website/blog/components/container'
import PostHeader from 'components/post-header'

export default function Schedule({
    title,
    publish,
    content,
    eyecatch,
    categories,
}) {
    return(
        <Container>
            <PostHeader title={title} subtitle="Blog Article" publish={publish} />
        </Container>
    )
}

export async function getStaticProps() {
    const slug = 'schedule'

    const post = await getPostBySlug(slug)

    return{
        props:{
            title: post.title,
            publish: post.publishDate,
            content: post.content,
            eyecatch: post.eyecatch,
            categories: post.categories,
        },
    }
}