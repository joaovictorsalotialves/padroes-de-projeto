import app from './adapters/presentations/api/config/app'
import env from './adapters/presentations/api/config/env'

app.listen(env.port, () => {
  console.log(`Server is running on port http://localhost:${env.port}`)
})
