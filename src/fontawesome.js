import {
  FontAwesomeIcon,
  FontAwesomeLayers,
} from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFontAwesome,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

library.add(faFontAwesome, faLinkedin, faGithub)

export default {
  FontAwesomeIcon,
  FontAwesomeLayers,
}
