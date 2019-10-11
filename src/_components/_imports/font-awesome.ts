import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faCoffee, faBars, faThLarge, faUsers, faGraduationCap, faChartLine,
  faChartPie, faChevronDown, faChevronUp, faSignOutAlt, faSearch,
  faChevronRight, faChevronLeft, faAngleDoubleLeft,faTimes, faCheck,
  faBan, faPlus, faMinus, faList, faEdit, faSave, faUser, faHome,
  faPaste, faClock, faCheckCircle, faExclamationCircle, faTimesCircle,
  faUpload, faInfo, faShareAlt, faCalendarAlt, faCheckDouble, faGavel,
  faExpand, faCompress, faEye, faCircle, faCogs, faChartBar, faNeuter, 
  faCubes, faMapMarkerAlt, faPause, faCog,faCheckSquare, faInfoCircle, 
  faThumbsUp, faThumbsDown,faDollarSign,faClone,faArrowLeft, faClipboardList,
  faClipboardCheck,faHandshake, faPhone, faAt, faCircleNotch,faBook,faLock, 
  faUnlock, faAngleDoubleRight, faUndoAlt, faIdCard, faEnvelope, faStar, faUserEdit, 
  faCommentDots, faMinusCircle,faWindowClose, faSyncAlt

} from '@fortawesome/free-solid-svg-icons'

import {
  faCircle as faCircleRegular, 
  faStar as faStarRegular,
  faCalendarAlt as faCalendarAltRegular,
  faIdCard as faIdCardRegular,
  faEnvelope as faEnvelopeRegular, 
  faTimesCircle as faTimesCircleRegular
} from '@fortawesome/free-regular-svg-icons'

import {
  faInstagram, faFacebookSquare, faTwitterSquare, faLinkedin
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faCoffee, faBars, faThLarge, faUsers, faGraduationCap, faChartLine,
  faChartPie, faChevronDown, faChevronUp, faSignOutAlt, faSearch,
  faChevronRight, faChevronLeft, faAngleDoubleLeft,faTimes, faCheck,
  faBan, faPlus, faMinus, faList, faEdit, faSave, faUser, faHome,
  faPaste, faClock, faCheckCircle, faExclamationCircle, faTimesCircle,
  faUpload, faInfo, faShareAlt, faCalendarAlt, faCheckDouble, faGavel,
  faExpand, faCompress, faEye, faCircle, faCogs, faChartBar, <any>faCircleRegular, 
  faNeuter, faCubes, faMapMarkerAlt, faPause, faCog,faCheckSquare, faInfoCircle,
  faThumbsUp, faThumbsDown,faDollarSign,faClone,faArrowLeft, faClipboardList,
  faClipboardCheck,faHandshake, faPhone, faAt, faCircleNotch,faBook,faLock, 
  faUnlock, faAngleDoubleRight, faUndoAlt, faIdCard, <any>faInstagram, <any>faFacebookSquare,
  <any>faTwitterSquare, <any>faLinkedin, faEnvelope, faStar, <any>faStarRegular, faUserEdit, 
  faCommentDots, <any>faCalendarAltRegular, <any>faIdCardRegular, <any>faEnvelopeRegular,
  faMinusCircle,faWindowClose,faSyncAlt, <any>faTimesCircleRegular
)

Vue.component('font-awesome-icon', FontAwesomeIcon);