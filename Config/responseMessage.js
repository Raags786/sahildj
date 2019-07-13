/**
 * Created by Shumi on 17/5/18.
 */
exports.ERROR = {

    INVALID_CREDENTIALS_INVALID_OTP: {
        statusCode: 400,
        customMessage: {
            en : 'Oops! PLEASE ENTER VALID OTP .',
          //  ar : 'وجه الفتاة! البريد الإلكتروني أو كلمة المرور غير صحيحة.'
        },
        type: 'INVALID_CREDENTIALS_INVALID_OTP'
    },



    INVALID_CREDENTIALS_INVALID_OLDPASSWORD: {
        statusCode: 400,
        customMessage: {
            en : 'Oops! OLD PASSWORD NOT MATCH WITH CURRENT PASSWORD.',
          //  ar : 'وجه الفتاة! البريد الإلكتروني أو كلمة المرور غير صحيحة.'
        },
        type: 'INVALID_CREDENTIALS_INVALID_OLDPASSWORD'
    },


    INVALID_CREDENTIALS_INVALIDPASSWORD: {
        statusCode: 400,
        customMessage: {
            en : 'Oops! ENTER VALID PASSWORD.',
          //  ar : 'وجه الفتاة! البريد الإلكتروني أو كلمة المرور غير صحيحة.'
        },
        type: 'INVALID_CREDENTIALS_INVALIDPASSWORD'
    },


    INVALID_CREDENTIALS_EMAIL : {
        statusCode: 400,
        customMessage: {
            en : 'Oops! The Email or password is incorrect.',
          //  ar : 'وجه الفتاة! البريد الإلكتروني أو كلمة المرور غير صحيحة.'
        },
        type: 'INVALID_CREDENTIALS_EMAIL'
    },

FORM_ALREADY_EXISTS:{
    statusCode:400,
    customMessage:{
        en:'A Form with such an Email Account already exists'
    },
    type:'FORM_ALREADY_EXISTS'
    },
    INVALID_OBJECT_ID : {
        statusCode:400,
        customMessage : {
            en : 'Invalid Id provided.',
          //  ar : 'قدمت رقم غير صالح.'
        },
        type : 'INVALID_OBJECT_ID'
    },
INVALID_BOOKING: {
    statusCode: 400,
    customMessage: {
        en: "Please refresh and try again"
    },
    type: 'INVALID_BOOKING',
},
    INVALID_BOOKING_DATE: {
    statusCode: 400,
    customMessage: {
        en: "Booking not available on selected date or time"
    },
    type: 'INVALID_BOOKING',
},
    DUPLICATE_PAYLOAD_DATA: {
        statusCode: 400,
        customMessage: {
            en: "Duplicate entries in language corresponding data"
        },
        type: 'DUPLICATE_DATA',
    },
    DUPLICATE_NAME: {
        statusCode: 400,
        customMessage: {
            en: "name already exists"
        },
        type: 'DUPLICATE_NAME',
    },
    INVALID_OPERATION : {
        statusCode:400,
        customMessage : {
            en : 'Invalid operation.',
        },
        type : 'INVALID_OPERATION'
    },
    DB_ERROR: {
        statusCode: 400,
        customMessage: {
            en : 'DB Error : ',
           // ar : 'DB خطأ:'
        },
        type: 'DB_ERROR'
    }, 
    INVALID_PAYMENT_METHOD: {
        statusCode: 400,
        customMessage: {
            en : 'Invalid Payment method'
           
        },
        type: 'INVALID_PAYMENT_METHOD'
    },
    INVALID_PIN: {
        statusCode: 400,
        customMessage: {
            en : 'Invalid Pin provided. Please try again. If the problem persists, please contact YetoPro team.'
           
        },
        type: 'INVALID_PAYMENT_METHOD'
    },
    APP_ERROR: {
        statusCode: 400,
        customMessage: {
            en : 'Application Error ',
         //   ar : 'خطأ في تطبيق'
        },
        type: 'APP_ERROR'
    },
    DUPLICATE: {
        statusCode: 400,
        customMessage: {
            en : 'Duplicate Entry',
          //  ar : 'إدخال مكرر'
        },
        type: 'DUPLICATE'
    },
    DEFAULT: {
        statusCode: 400,
        customMessage: {
            en : 'Something went wrong.',
         //   ar : 'هناك خطأ ما.'
        },
        type: 'DEFAULT'
    },
    UNAUTHORIZED: {
        statusCode:401,
        customMessage : {
            en : 'You are not authorized to perform this action',
           // ar : 'لا تملك الصلاحية لتنفيذ هذا الإجراء'
        },
        type : 'UNAUTHORIZED'
    },
    SESSION_EXPIRED: {
        statusCode:401,
        customMessage : {
            en : 'Your account has been login on another device. Please login again.',
            // ar : 'لا تملك الصلاحية لتنفيذ هذا الإجراء'
        },
        type : 'SESSION_EXPIRED'
    },
    ROLE_CHANGE: {
        statusCode:401,
        customMessage : {
            en : 'Looks like admin has made some changes, Please login again to continue.',
           // ar : 'لا تملك الصلاحية لتنفيذ هذا الإجراء'
        },
        type : 'ROLE_CHANGE'
    },
    INVALID_CREDENTIALS : {
        statusCode: 400,
        customMessage: {
            en : 'Oops! The Email or password is incorrect.',
          //  ar : 'وجه الفتاة! البريد الإلكتروني أو كلمة المرور غير صحيحة.'
        },
        type: 'INVALID_CREDENTIALS'
    }, INVALID_CREDENTIALS_USERNAME : {
        statusCode: 400,
        customMessage: {
            en : 'Oops! The Username or password is incorrect.',
          //  ar : 'وجه الفتاة! البريد الإلكتروني أو كلمة المرور غير صحيحة.'
        },
        type: 'INVALID_CREDENTIALS_USERNAME'
    },
    CREDIT_LIMIT_NOT_ALLOWED : {
        statusCode: 400,
        customMessage: {
            en : 'Credit limit is not allowed for this account.',
            //  ar : 'وجه الفتاة! البريد الإلكتروني أو كلمة المرور غير صحيحة.'
        },
        type: 'CREDIT_LIMIT_NOT_ALLOWED'
    },
    CREDIT_LIMIT_LESS : {
        statusCode: 400,
        customMessage: {
            en : 'Please enter the credit less than or equal to available credit limit.',
            //  ar : 'وجه الفتاة! البريد الإلكتروني أو كلمة المرور غير صحيحة.'
        },
        type: 'CREDIT_LIMIT_LESS'
    },
    TRANSACTION_ALREADY_PROGRESS : {
        statusCode: 400,
        customMessage: {
            en : 'Your previous transaction is under process.',
            //  ar : 'وجه الفتاة! البريد الإلكتروني أو كلمة المرور غير صحيحة.'
        },
        type: 'TRANSACTION_ALREADY_PROGRESS'
    },
    WRONG_PASSWORD: {
        statusCode: 400,
        customMessage: {
            en : 'Password is Incorrect.',
         //   ar : 'كلمة المرور غير صحيحة.'
        },
        type: 'WRONG_PASSWORD'
    } , OLD_WRONG_PASSWORD: {
        statusCode: 400,
        customMessage: {
            en : 'Old Password is Incorrect.',
         //   ar : 'كلمة المرور غير صحيحة.'
        },
        type: 'OLD_WRONG_PASSWORD'
    } ,
    NO_FILE: {
        statusCode: 400,
        customMessage: {
            en : 'No file found.'
        },
        type: 'NO_FILE'
    },
    SAPCE_NOT_UPLOAD: {
        statusCode: 400,
        customMessage: {
            en : 'Please upload the cover photo for your Space.'
        },
        type: 'SAPCE_NOT_UPLOAD'
    },
    EMAIL_NOT_FOUND: {
        statusCode:400,
        customMessage : {
            en : 'Email not found',
           // ar : 'لا تملك الصلاحية لتنفيذ هذا الإجراء'
        },
        type : 'EMAIL_NOT_FOUND'
    },
    EMAIL_ALREADY_EXIST: {
        statusCode:400,
        customMessage : {
            en : 'This email already exist. Please enter other email',
           // ar : ''
        },
        type : 'EMAIL_ALREADY_EXIST'
    },
    TAX_TYPE_DOES_NOT_EXITS: {
        statusCode:400,
        customMessage : {
            en : 'This tax type does not exists',
           // ar : 'لا تملك الصلاحية لتنفيذ هذا الإجراء'
        },
        type : 'TAX_TYPE_DOES_NOT_EXITS'
    },
    INVALID_TIME_SLOTS : {
        statusCode: 403,
        customMessage : {
            en : 'Please enter the time slots to publish a venue.',
            //  ar : 'قدمت رقم غير صالح.'
        },
        type : 'INVALID_TIME_SLOTS'
    },
    NOT_UPLOADED_COVER_PHOTO : {
        statusCode:406,
        customMessage : {
            en : 'Please enter the cover photo to publish a venue.',
            //  ar : 'قدمت رقم غير صالح.'
        },
        type : 'NOT_UPLOADED_COVER_PHOTO'
    },
    INVALID_PERCENTAGE : {
        statusCode:406,
        customMessage : {
            en : 'Please enter the advance payment percentage between 1 to 99.',
            //  ar : 'قدمت رقم غير صالح.'
        },
        type : 'INVALID_PERCENTAGE'
    },
    TAX_TYPE_NAME_ALREADY_EXITS: {
        statusCode:400,
        customMessage : {
            en : 'Tax Name already exists',
           // ar : 'لا تملك الصلاحية لتنفيذ هذا الإجراء'
        },
        type : 'TAX_TYPE_NAME_ALREADY_EXITS'
    },
    PHONE_ALREADY_EXIST: {
        statusCode:400,
        customMessage : {
            en : 'This Phone Number has been already exist',
           // ar : 'لا تملك الصلاحية لتنفيذ هذا الإجراء'
        },
        type : 'PHONE_ALREADY_EXIST'
    },
    ALREADY_LINKED: {
        statusCode:400,
        customMessage : {
            en : 'This affiliate is a sub-agent of some other B2B account, so this linking is not possible',
            // ar : 'لا تملك الصلاحية لتنفيذ هذا الإجراء'
        },
        type : 'ALREADY_LINKED'
    },
    INVALID_DATE: {
        statusCode:400,
        customMessage : {
            en : 'Date cannot be less than current date',
           // ar : 'لا تملك الصلاحية لتنفيذ هذا الإجراء'
        },
        type : 'INVALID_DATE'
    },
    DATE_RANGE_ALREADY_EXIST: {
        statusCode:400,
        customMessage : {
            en : 'Date Range you entered already exists',
           // ar : 'لا تملك الصلاحية لتنفيذ هذا الإجراء'
        },
        type : 'DATE_RANGE_ALREADY_EXIST'
    },
    BOOKING_NOT_FOUND: {
        statusCode: 400,
        customMessage : {
            en : 'No Booking found.',
            // ar : 'لا تملك الصلاحية لتنفيذ هذا الإجراء'
        },
        type : 'BOOKING_NOT_FOUND'
    },
    ACCOUNT_NOT_VERIFY: {
        statusCode:400,
        customMessage : {
            en : 'This link has been already expired.',
           // ar : 'لا تملك الصلاحية لتنفيذ هذا الإجراء'
        },
        type : 'ACCOUNT_NOT_VERIFY'
    },
    CUTOFF_TIME_EXCEEDED: {
        statusCode:400,
        customMessage : {
            en : 'Sorry booking for this slot is restricted. Please select another slot to book an attraction',
            // ar : 'لا تملك الصلاحية لتنفيذ هذا الإجراء'
        },
        type : 'CUTOFF_TIME_EXCEEDED'
    },
    BOOKING_ALREADY_CONFIRMED: {
        statusCode:400,
        customMessage : {
            en : 'This booking has already been paid',
           // ar : 'لا تملك الصلاحية لتنفيذ هذا الإجراء'
        },
        type : 'BOOKING_ALREADY_CONFIRMED'
    },
    BOOKING_ALREADY_UNDERPROCESS: {
        statusCode:400,
        customMessage : {
            en : 'This booking is in under processed ',
            // ar : 'لا تملك الصلاحية لتنفيذ هذا الإجراء'
        },
        type : 'BOOKING_ALREADY_CONFIRMED'
    },
    ORDER_NO_REQUIRED: {
        statusCode:400,
        customMessage : {
            en : 'Order no is required.',
            // ar : 'لا تملك الصلاحية لتنفيذ هذا الإجراء'
        },
        type : 'ORDER_NO_REQUIRED'
    },
    AVENUE_ALREADY_EXIST: {
        statusCode:400,
        customMessage : {
            en : 'This venue has been already exist.',
           // ar : 'لا تملك الصلاحية لتنفيذ هذا الإجراء'
        },
        type : 'AVENUE_ALREADY_EXIST'  
    },
    ONE_VENUE_ALREADY_EXIST: {
        statusCode:400,
        customMessage : {
            en : 'You are already added one venue',
            // ar : 'لا تملك الصلاحية لتنفيذ هذا الإجراء'
        },
        type : 'ONE_VENUE_ALREADY_EXIST'
    },
    INVOICE_ALREADY_GENERATED: {
        statusCode:400,
        customMessage : {
            en : 'This invoice has been already generated',
            // ar : 'لا تملك الصلاحية لتنفيذ هذا الإجراء'
        },
        type : 'INVOICE_ALREADY_GENERATED'
    },
    ALREADY_ASSOICATED: {
        statusCode:400,
        customMessage : {
            en : 'You can not change this space because this space has been already associated with ',
            // ar : 'لا تملك الصلاحية لتنفيذ هذا الإجراء'
        },
        type : 'AVENUE_ALREADY_EXIST'
    },
    SERVICE_ALREADY_EXIST: {
        statusCode:400,
        customMessage : {
            en : 'This Service has been already exist.',
           // ar : 'لا تملك الصلاحية لتنفيذ هذا الإجراء'
        },
        type : 'SERVICE_ALREADY_EXIST'  
    },
    INCORRECT_OLD_PASSWORD: {
        statusCode:400,
        customMessage : {
            en : 'Your old password is incorrect.',
           // ar : 'لا تملك الصلاحية لتنفيذ هذا الإجراء'
        },
        type : 'INCORRECT_OLD_PASSWORD'  
    },
    INCORRECT_OLD_NEW_PASSWORD: {
        statusCode:400,
        customMessage : {
            en :  'Old and New password both are same.Please change new password.',
           // ar : 'لا تملك الصلاحية لتنفيذ هذا الإجراء'
        },
        type : 'INCORRECT_OLD_NEW_PASSWORD'  
    },
    INCORRECT_VENUE_ID: {
        statusCode:400,
        customMessage : {
            en :  'This venue id is invalid.',
           // ar : 'لا تملك الصلاحية لتنفيذ هذا الإجراء'
        },
        type : 'INCORRECT_VENUE_ID'  
    },
    INCORRECT_SERVICE_ID: {
        statusCode:400,
        customMessage : {
            en :  'This Service id is invalid.',
           // ar : 'لا تملك الصلاحية لتنفيذ هذا الإجراء'
        },
        type : 'INCORRECT_SERVICE_ID'  
    },
    INCORRECT_SUPPLIER_ID: {
        statusCode:400,
        customMessage : {
            en :  'Supplier id is required.',
            // ar : 'لا تملك الصلاحية لتنفيذ هذا الإجراء'
        },
        type : 'INCORRECT_SUPPLIER_ID'
    },
    INCORRECT_SUPPLIER_ID_INVALID: {
        statusCode:400,
        customMessage : {
            en :  'Supplier id is Invalid.',
            // ar : 'لا تملك الصلاحية لتنفيذ هذا الإجراء'
        },
        type : 'INCORRECT_SUPPLIER_ID_INVALID'
    },
    ALREADY_APPROVED: {
        statusCode:400,
        customMessage : {
            en :  'This Venue has been already approved.',
            // ar : 'لا تملك الصلاحية لتنفيذ هذا الإجراء'
        },
        type : 'ALREADY_APPROVED'
    },
    PAYMENT_ALREADY_DONE: {
        statusCode:400,
        customMessage : {
            en :  'Your payment is already completed.',
            // ar : 'لا تملك الصلاحية لتنفيذ هذا الإجراء'
        },
        type : 'PAYMENT_ALREADY_DONE'
    },
    COMPANY_NAME_REQUIRED: {
        statusCode:400,
        customMessage : {
            en :  'Company name is required.',
           // ar : 'لا تملك الصلاحية لتنفيذ هذا الإجراء'
        },
        type : 'COMPANY_NAME_REQUIRED'  
    },
    SUPPILIER_NOT_FOUND: {
        statusCode:400,
        customMessage : {
            en :  'This id is not found.',
           // ar : 'لا تملك الصلاحية لتنفيذ هذا الإجراء'
        },
        type : 'SUPPILIER_NOT_FOUND'  
    },
    USER_NOT_FOUND: {
        statusCode:400,
        customMessage : {
            en :  'User not found.',
           // ar : 'لا تملك الصلاحية لتنفيذ هذا الإجراء'
        },
        type : 'USER_NOT_FOUND'  
    },
    USER_DELETED: {
        statusCode: 410,
        customMessage : {
            en:  'Your account has been deleted by Admin.',
           // ar : 'لا تملك الصلاحية لتنفيذ هذا الإجراء'
        },
        type : 'USER_DELETED'
    },
    BLOCK_USER: {
        statusCode: 410,
        customMessage: {
            en:  'Your account has been blocked by Admin.',
           // ar : 'لا تملك الصلاحية لتنفيذ هذا الإجراء'
        },
        type : 'BLOCK_USER'
    },
    
    CUSTOMER_NOT_FOUND: {
        statusCode: 410,
        customMessage: {
            en:  'Customer not found'
        },
        type : 'CUSTOMER_NOT_FOUND'
    },
    NOT_VERIFY: {
        statusCode: 410,
        customMessage: {
            en: 'Your account has not been verify.Please go to you email and verify your account'
        },
        type : 'NOT_VERIFY'
    },
    NOT_UPDATE: {
        statusCode: 400,
        customMessage: {
            en: 'Your data not updated.'
        },
        type : 'NOT_UPDATE'
    },
    NO_ATTRACTION_ASSIGNED: {
        statusCode: 400,
        customMessage: {
            en: 'Attraction not assigned.'
        },
        type : 'NO_ATTRACTION_ASSIGNED'
    },
    NO_TIME_SLOT_FOUND: {
        statusCode: 400,
        customMessage: {
            en: 'No time slot found.'
        },
        type : 'NO_TIME_SLOT_FOUND'
    },
    TICKET_NOT_FOUND: {
        statusCode: 400,
        customMessage: {
            en: 'No ticket available'
        },
        type : 'TICKET_NOT_FOUND'
    },
    TICKET_QUANTITY_ISSUE: {
        statusCode: 400,
        customMessage: {
            en: 'You cannot book more than 10 tickets at a time'
        },
        type : 'TICKET_QUANTITY_ISSUE'
    },
    TICKET_API_ERROR: {
        statusCode: 400,
        customMessage: {
            en: 'Please retry after sometime'
        },
        type : 'TICKET_API_ERROR'
    },
    OTHER_MEETING_SPACE_INVALID: {
        statusCode: 400,
        customMessage: {
            en: 'Other meeting space is coming wrong.'
        },
        type : 'OTHER_MEETING_SPACE_INVALID'
    },
    VENUE_NOT_FOUND: {
        statusCode: 400,
        customMessage: {
            en: 'Some spaces does not exist in the system or block! Please check again.'
        },
        type : 'VENUE_NOT_FOUND'
    },
    SPACES_COMBO_ALREADY_EXIST: {
        statusCode: 400,
        customMessage: {
            en: 'Spaces combo has already been existing.'
        },
        type : 'SPACES_COMBO_ALREADY_EXIST'
    },
    BOOKING_ALREADY_EXIST: {
        statusCode: 400,
        customMessage: {
            en: "This date time slot booking already exist."
        },
        type: 'BOOKING_ALREADY_EXIST',
    },
    INVALID_PAYMENT: {
        statusCode: 400,
        customMessage: {
            en: "Incorrect amount while booking."
        },
        type: 'INVALID_PAYMENT',
    },
    CREDIT_LIMIT: {
        statusCode: 400,
        customMessage: {
            en: "Your credit limit has been exhausted."
        },
        type: 'CREDIT_LIMIT',
    },
    SLOT_NOT_FOUND: {
        statusCode: 400,
        customMessage: {
            en: 'Time slot not found.'
        },
        type : 'SLOT_NOT_FOUND'
    },
    GUEST_USER: {
        statusCode: 409,
        customMessage: {
            en: 'Please login first before booking created.'
        },
        type : 'GUEST_USER'
    },
    START_DATE_END_DATE: {
        statusCode: 400,
        customMessage: {
            en: 'Start date must be greater than end date.'
        },
        type: 'START_DATE_END_DATE'
    },
    TODAY_DATE_GREATER_THAN_CURRENT_DATE: {
        statusCode: 400,
        customMessage: {
            en: 'Start date and End date must be greater than current date.'
        },
        type: 'TODAY_DATE_GREATER_THAN_CURRENT_DATE'
    },
    TICKET_ALREADY_EXIST: {
        statusCode: 400,
        customMessage: {
            en: 'Ticket already exist.'
        },
        type: 'TICKET_ALREADY_EXIST'
    },
    DUPLICATE_TICKET_EXIST: {
        statusCode: 400,
        customMessage: {
            en: 'Duplicate ticket exist in this sheet.'
        },
        type: 'DUPLICATE_TICKET_EXIST'
    },
    TICKET_INVALID_DATA: {
        statusCode: 400,
        customMessage: {
            en: 'Ticket Invalid data.'
        },
        type: 'TICKET_INVALID_DATA'
    },
    PRICE_CHANGED: {
        statusCode: 400,
        customMessage: {
            en: 'Please referesh your page, some changes made by provider.'
        },
        type: 'PRICE_CHANGED'
    },
    BOOKING_ALREADY_ACCEPTED: {
        statusCode: 400,
        customMessage: {
            en: 'This booking has already accepted.'
        },
        type: 'BOOKING_ALREADY_ACCEPTED'
    },
    INVALID_BOOKING_STATUS: {
        statusCode: 400,
        customMessage: {
            en: 'Invalid booking status.'
        },
        type: 'INVALID_BOOKING_STATUS'
    },
    BOOKING_ALREADY_CANCELED: {
        statusCode: 400,
        customMessage: {
            en: 'This booking has already canceled.'
        },
        type: 'BOOKING_ALREADY_ACCEPTED'
    },
    BOOKING_NOT_CANCELED: {
        statusCode: 400,
        customMessage: {
            en: 'You cannot canceled this booking'
        },
        type: 'BOOKING_NOT_CANCELED'
    },
    BOOKING_ALREADY_REJECTED: {
        statusCode: 400,
        customMessage: {
            en: 'This booking has already rejected.'
        },
        type: 'BOOKING_ALREADY_REJECTED'
    },
    TEMPLATE_MOT_FOUND: {
        statusCode: 400,
        customMessage: {
            en: 'No template found.'
        },
        type: 'TEMPLATE_MOT_FOUND'
    },
    PHONE_NOT_FOUND: {
        statusCode:402,
        customMessage : {
            en : 'This Phone Number is Not Registered',
            // ar : 'لا تملك الصلاحية لتنفيذ هذا الإجراء'
        },
        type : 'PHONE_NOT_FOUND'
    },
    ENTER_YOUR_NEW_PASSWORD: {
        statusCode:400,
        customMessage : {
            en : 'Your Password field is missing',
            // ar : 'لا تملك الصلاحية لتنفيذ هذا الإجراء'
        },
        type : 'ENTER_YOUR_NEW_PASSWORD'
    },
    INCORRECT_DETAILS:{
        statusCode:400,
        customMessage : {
            en : 'Please check your filled Details!!',
            //  ar : 'قدمت رقم غير صالح.'
        },
        type : 'INCORRECT_DETAILS'
    },
    ALREADY_RATING: {
        statusCode: 400,
        customMessage: {
            en: 'You has already been completed the rating.'
        },
        type: 'ALREADY_RATING'
    },
    STATUS_ALREADY_CHNAGE:{
        statusCode:400,
        customMessage : {
            en : 'You can not forward this request.',
            //  ar : 'قدمت رقم غير صالح.'
        },
        type : 'STATUS_ALREADY_CHNAGE'
    },
    INVALID_ERROR_CLEAR_TRIP:{
        statusCode:400,
        customMessage : {
            en : 'Something went wrong.',
            //  ar : 'قدمت رقم غير صالح.'
        },
        type : 'INVALID_ERROR_CLEAR_TRIP'
    },
    INVALID_INVENTORY_STATUS:{
        statusCode:400,
        customMessage : {
            en : 'This is invalid inventory status.',
            //  ar : 'قدمت رقم غير صالح.'
        },
        type : 'INVALID_INVENTORY_STATUS'
    },
    ALREADY_ASSOICATED_WITH_ATTRACTION:{
        statusCode:400,
        customMessage : {
            en : 'This supplier has already been associated with attraction. If you want to change this Please remove mapping with attraction.',
            //  ar : 'قدمت رقم غير صالح.'
        },
        type : 'ALREADY_ASSOICATED_WITH_ATTRACTION'
    },
    NOTIFICATION_ERROR: {
        statusCode: 400,
        customMessage: {
            en: 'Push notification error.'
        },
        type : 'NOTIFICATION_ERROR'
    },
};
exports.SUCCESS = {
    DEFAULT: {
        statusCode: 200,
        customMessage: {
            en : 'Success',
           // ar : 'نجاح'
        },
        type: 'DEFAULT'
    },
    ADDED : {
        statusCode: 200,
        customMessage: {
            en : 'Added successfully.',
           // ar : 'اضيف بنجاح.'
        },
        type: 'ADDED'
    },
    FORGOT_PASSWORD: {
        statusCode: 200,
        customMessage: {
            en: "A reset password link is sent to your registered email address."
        },
        type: 'FORGOT_PASSWORD'
    },
    PASSWORD_RESET_SUCCESSFULL:{
        statusCode:200,
        customMessage:{
            en:"Your Password has been Successfully Changed"
        },
        type:'PASSWORD_RESET_SUCCESSFULL'
    },
    RESET_PASSWORD:{
        statusCode:200,
        customMessage:{
            en:"A reset password OTP has been sent to your registered Phone Number"
        },
        type: 'RESET_PASSWORD'
    }
};