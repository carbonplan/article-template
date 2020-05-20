import { Box, Text, Grid, Container } from 'theme-ui'
import Layout from './layout'
import Contents from '../contents'
import BackArrow from './article/back-arrow'

const Article = ({ children, meta }) => {

  const info = Contents.articles.filter(({id}) => id === meta.id)[0]

  return <Layout shareCard={meta.id} shareDescription={meta.summary} shareTitle={info.title}>
    <Box sx={{ 
      backgroundColor: info.color, 
      height: ['100px','100px',info.background ? '275px' : '100px'], 
      position: 'relative',
      backgroundImage: ['none','none',
        info.background ? `url(https://carbonplan-assets.s3.amazonaws.com/images/${info.background})` : 'none'
      ],
      backgroundSize: 'cover',
      backgroundPosition: '50% 70%'
    }}>
      <Box sx={{ 
        position: 'absolute', 
        bottom: 0, 
        pb: [3],
        width: '100%',
        color: 'background'
      }}>
        <Container sx={{ px: [4] }}>
          <Grid columns={[1, '15% 35% 50%', '15% 35% 50%']} gap={['0px']}>
            <Text sx={{ fontFamily: 'monospace', letterSpacing: 'mono', textTransform: 'uppercase' }}>
              Article({ info.number })
            </Text>
            <Text sx={{ fontFamily: 'monospace', letterSpacing: 'mono', textTransform: 'uppercase' }}>
              by { info.authors }
            </Text>
            <Text sx={{ fontFamily: 'monospace', letterSpacing: 'mono', textTransform: 'uppercase' }}>
              { info.date }
            </Text>
          </Grid>
        </Container>
      </Box>
    </Box>
    <Container sx={{ px: [4], mb: [5] }}>
      <BackArrow/>
      <Grid columns={[1, '650px 1fr', '650px 1fr']} gap={['100px']}>
        <Box sx={{ mt: '-65px' }}>{children}</Box>
        <Box sx={{ display: ['none', 'none', 'initial']}}>
          <Box sx={{ mt: '55px', maxWidth: '250px' }}>
            <Text sx={{ fontFamily: 'heading', letterSpacing: 'wide', mb: [3] }}>
              / QUICK LOOK
            </Text>
            <Text sx={{ color: info.color }}>
              {meta.summary}
            </Text>
          </Box>
          {meta.quotes.map((quote) => (
            <Box key={quote.position} sx={{ position: 'absolute', top: quote.position, maxWidth: '250px' }}>
            <Text sx={{ 
              fontFamily: 'heading', 
              fontSize: [5], 
              lineHeight: 'heading',
              color: info.color 
            }}>
              {quote.text}
            </Text>
            </Box>
          ))}
        </Box>
      </Grid>
    </Container>
  </Layout>
}

export default Article