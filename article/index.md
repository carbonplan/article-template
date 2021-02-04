import Article from '../components/article'
import Component from './components/component'

export const meta = {
  id: 'article-title',
  title: 'Article title',
  authors: ['Author 1', 'Author 2'],
  color: 'blue',
  summary: 'Summary of article.',
  quotes: [],
}

# Article title

This is markdown

<Component></Component>

export default ({ children }) => <Article meta={meta}>{children}</Article>
