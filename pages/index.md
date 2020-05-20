import Article from '../components/article'
import Component from './components/component'

export const meta = {
  id: 'article-title',
  summary: 'Article summary',
  quotes: []
}

# Article title

This is markdown

<Component></Component>

export default ({ children }) => <Article meta={meta}>{children}</Article>