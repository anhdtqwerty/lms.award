import axios from '@/plugins/axios'
import utils from '@/plugins/utils'
const SLOT_API = '/slots/'
const CLASS_API = '/classes/'
const STUDENT_API = '/students/'
const ATTENDANCE_API = '/attendances/'
const LOG_API = '/Logs/'
const MAJOR_API = '/Majors/'
const GENERATION_API = '/Generations/'
const UPLOAD_API = '/upload/'
const DESTROY_API = '/upload/files/'
const COURSE_API = '/courses/'
const LESSON_API = '/lessons/'
const STAFF_API = '/staff/'
const TEACHER_API = '/teachers/'
const USER_API = '/users/'
const BILL_API = '/bills/'
const PRODUCT_API = '/products/'
const AUTH_API = '/auth/local'
const MARK_API = '/marks/'
const LEAD_API = '/leads/'
const TRANSCRIPT_API = '/transcripts/'
const FACILITY_API = '/facilities/'
const LIBRARY_API = '/facilities/'
const ROOM_API = '/rooms/'
const SHOWCASE_API = '/showcases/'
const APIHelper = api => ({
  search: (params, option) =>
    axios.get(api, { params: utils.filterObject(params) }, option),
  count: (params, option) =>
    axios.get(api + 'count', { params: utils.filterObject(params) }, option),
  fetch: (params, option) =>
    axios.get(api, { params: utils.filterObject(params) }, option),
  fetchOne: (id, option) => axios.get(api + id, option),
  create: (params, options) =>
    axios.post(api, utils.filterObject(params), options),
  update: (id, params, option) =>
    axios.put(api + id, utils.filterObject(params), option),
  remove: (id, option) => axios.delete(api + id, option)
})

export const Auth = {
  ...APIHelper(AUTH_API),
  forgotPassword: email => axios.post('/auth/forgot-password', { email }),
  resetPassword: (code, password, passwordConfirmation) =>
    axios.post('/auth/reset-password', {
      code,
      password,
      passwordConfirmation
    })
}

export const Class = APIHelper(CLASS_API)
export const Student = APIHelper(STUDENT_API)
export const Attendance = APIHelper(ATTENDANCE_API)
export const Slot = APIHelper(SLOT_API)
export const Log = APIHelper(LOG_API)

export const Major = APIHelper(MAJOR_API)
export const Generation = APIHelper(GENERATION_API)
export const Course = APIHelper(COURSE_API)
export const Lesson = APIHelper(LESSON_API)
export const Staff = APIHelper(STAFF_API)
export const Teacher = APIHelper(TEACHER_API)
export const User = APIHelper(USER_API)
export const Bill = APIHelper(BILL_API)
export const Product = APIHelper(PRODUCT_API)
export const Mark = APIHelper(MARK_API)
export const Facility = APIHelper(FACILITY_API)
export const Lead = APIHelper(LEAD_API)
export const Book = APIHelper(LIBRARY_API)
export const Transcript = APIHelper(TRANSCRIPT_API)
export const Room = APIHelper(ROOM_API)
export const Showcase = APIHelper(SHOWCASE_API)
export const Upload = {
  upload: formData =>
    axios.post(UPLOAD_API, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }),
  destroy: id => axios.delete(DESTROY_API + id)
}

export default {
  Auth,
  Class,
  Attendance,
  Slot,
  Log,
  Student,
  Generation,
  Major,
  User,
  Mark,
  Facility,
  Lead,
  Staff,
  Transcript,
  Room,
  Book,
  Showcase
}
