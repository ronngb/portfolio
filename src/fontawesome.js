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
import {
  faEnvelope,
  faExternalLinkAlt,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faFontAwesome,
  faLinkedin,
  faGithub,
  faEnvelope,
  faExternalLinkAlt,
  faChevronLeft,
  faChevronRight
)

export default {
  FontAwesomeIcon,
  FontAwesomeLayers,
}
