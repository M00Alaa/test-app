/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Observable } from 'rxjs';
import Swal, {
  SweetAlertIcon,
  SweetAlertOptions,
  SweetAlertResult,
} from 'sweetalert2';
import {
  FilteredQuery,
  SortDirection,
  SortedQuery,
} from './core/backend/elites/models';

export function createFilter(
  ...args: FilteredQuery[]
): undefined | FilteredQuery[] {
  return (
    args?.filter((v) => v?.values && v?.values?.some((s) => !!s)) || undefined
  );
}
export function createSorting(
  ...args: {
    property: string;
    direction: SortDirection;
    sort: boolean;
  }[]
): undefined | SortedQuery[] {
  return (
    args
      .filter((v) => v.sort)
      .map((v) => ({ direction: v.direction, propertyName: v.property })) ||
    undefined
  );
}

export const isProfessionWakeel = (id: number | null | undefined) => {
  return id === 1;
};

export const projectName = {
  en: 'KSA-Elites ',
  ar: 'KSA-Elites ',
};

export const SyncfusionLicense =
  'ORg4AjUWIQA/Gnt2V1hhQlJAfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5ad0FjX35bdXNTQmhU';

export const ROLES = {
  Admin: 'Admin',
  Employee: 'Employee',
  // NURSERY_EMPLOYEE: 'NurseryEmployee',
  // NURSERY_MANAGER: 'NurseryManager',
  // CAN_CONFIRM_NURSERY_ORDERS: 'CanConfirmNurseryOrders',
  // CanUseTaskManager: 'CanUseTaskManager',
  // CanUseProjectManager: 'CanUseProjectManager',
  // CanUseNurseryManager: 'CanUseNurseryManager',
};

export const logo = {
  light: '/assets/images/ryad-logo.svg',
  dark: '/assets/images/ryad-logo.svg',
  light_sm: '/assets/images/ryad-logo-sm.svg',
  dark_sm: '/assets/images/ryad-logo-sm.svg',
  ryad: '/assets/images/ryad-logo.svg',
  ryadGreen: '/assets/images/ryad_logo_green.svg',
};

export function downloadData(
  data: BlobPart,
  contentDispositionHeader: string,
  contentType: string | null,
) {
  if (data && contentDispositionHeader && contentType) {
    const filenameRegex = /filename\*=UTF-8''([^;]+)/;
    const matches = filenameRegex.exec(contentDispositionHeader);

    let filename = 'download.zip';
    if (matches !== null && matches[1]) {
      filename = decodeURIComponent(matches[1].replace(/['"]/g, ''));
    }

    const blob = new Blob([data], {
      type: contentType || 'application/zip',
      endings: 'transparent',
    });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;

    document.body.appendChild(link);
    link.click();

    // clean up the URL and link element
    URL.revokeObjectURL(link.href);
    document.body.removeChild(link);
  }
}

export function isSafeCoordinate(number: unknown): number | undefined {
  return number != '' && number != null && number != undefined
    ? +number
    : undefined;
}
export const responseErrors = {
  DuplicateName: 'إسم مكرر مسبقًا',
  Error: 'حدث خطأ',
  CompanyTypeNotEqualsProjectType: 'الشركة ونوع المشروع غير متطابقين',
  LOCKED: 'تم إيقاف حسابك مؤقتًا .. برجاء التواصل مع مدير النظام',
  'The Name field is required.': 'يجب إدخــال الإسم',
  'The projectCommand field is required.': 'بعض المدخلات الإجبارية غير موجودة',
  FieldRequired: 'برجاء ملء كل البيانات بشكل صحيح',
  InvalidCRN: 'رقم سجل تجاري غير صحيح',
  MaxFieldLength: 'عدد الحروف أكثر من المطلوب',
  MinFieldLength: 'عدد الحروف أقل من المطلوب',
  UserNotFound: 'اسم المستخدم غير موجود',
  InvalidLogin: 'اسم المستخدم او كلمة المرور خطأ ',
  DuplicateUser: 'المستخدم موجود من قبل',
  DuplicateEmail: 'تم تسجيل حساب بالفعل بهذا البريد الإلكتروني',
  DuplicatePhoneNumber: 'هناك حساب بالفعل يستخدم نفس رقم التليفون',
  NotFound: 'لا يوجد بيانات',
  CantDelete: 'لا يمكن الحــذف',
  DuplicateCode: 'الكود مُستخدم من قبــل',
  UserAlreadyLoggedIn: 'أنت بالفعل مسجل دخولك',
  InvalidEmailAddress: 'البريد الإلكتروني غير صحيح',
  InvalidPhoneNumber: 'رقم التليفون غير صحيح',
  Expired: 'انتهت صلاحية رمز التاكيد',
  CantLockYourself: 'لا يمكنك إيقاف حسابك',

  DuplicateCrn: 'رقم تجاري مكرر',
  DuplicateCRN: 'رقم تجاري مكرر',
  NotEnoughItems: 'لا يوجد منتجات كفاية ',
  InvalidUsername: 'اسم مستخدم غير مقبول',
  InvalidCrn: 'رقم تجاري غير صالح',
  InvalidPasswordRequirements: 'كلمة مرور غير صالحة',
  DuplicateIdNumber: 'Id مكرر',
  InvalidStartDate: 'تاريخ بداية غير صالح',
  InvalidEndDate: 'تاريخ نهاية غير صالح',
  InvalidDate: 'تاريخ غير صالح',
  ParentNotFound: 'حدث خطأ',
  ProjectNotFound: 'المشروع غير موجود',
  CantLockAdmin: 'لا تستطيع إيقاف حساب مدير النظام',
  ExceedValue: 'القيمة أكثر من المطلوب',
  CategoryNotFound: 'الفئة غير موجودة',
  FileNotFound: 'الملف غير موجود',
  BadFile: 'ملف  غير صالح',
  AccessDenied: 'لا تمتلك صلاحية',
  LastValueIsBiggerThanCurrentValue:
    'القيمة الأخيرة يجب أن تكون أكبر من القيمة الحالية',
  OrderCantBeUpdated: 'لا يمكن تحديث الطلب',
  OrderNotApproved: 'الطلب غير معتمد',
  OrderCantBeDeleted: 'لا يمكن حذف الطلب',
  UnitNotFound: 'لا يوجد وحدة موجودة',
  QuantityCantBeLessThanZero: 'الكمية يجب أن تكون أكبر من صفر',
  QuantityAlreadyReserved: 'الكمية محجوزة بالفعل لبعض الطلبات',
  ItemAlreadyExists: 'المنتج موجود بالفعل',
  Duplicate: 'المدخل مكرر',
  CantAddFinancialSummary: 'لا يمكن إضافة ملخص مالي',
  FinancialSummaryTypeMustBeFinal: 'يجب أن يكون الملخص المالي نهائي',
};

export const errorCallback = (err: any) => {
  SWAL('error', err?.errorCode);
};

export const SWAL = (
  type: SweetAlertIcon,
  title: string,
  text?: string,
  confirmCallback?: Function,
  options?: SweetAlertOptions,
): Promise<SweetAlertResult<any>> | null => {
  if (title === 'NO-ERROR') {
    return null;
  }
  const errmsg = title ? responseErrors[title] || title : title;

  return Swal.fire({
    icon: type,
    titleText: errmsg || (type === 'error' ? 'حدث خطأ' : ''),
    text,
    confirmButtonColor: '#2BA18Cff',
    confirmButtonText: 'تمام',
    cancelButtonText: 'إلغاء',
    ...options,
  });
};
export const SWALConfirmation = (
  type: SweetAlertIcon,
  title?: string,
  callableFunction?: Observable<any>,
  resultText?: string,
  actionText?: string,
  text?: string,
): Promise<SweetAlertResult<any>> => {
  return Swal.fire({
    title: title,
    text: text || '',
    icon: type,
    showCancelButton: true,
    confirmButtonText: actionText || 'نعـم',
    cancelButtonText: 'إغلاق',
    showLoaderOnConfirm: true,
    reverseButtons: true,
    confirmButtonColor: '#61AA8B',
    preConfirm: (isConfirmed) => {
      // eslint-disable-next-line no-unused-vars
      return new Promise<void>((resolve, reject) => {
        if (isConfirmed) {
          callableFunction?.subscribe({
            next: () => {
              SWAL('success', resultText || 'تم التنفيذ');
              resolve();
            },
            error: (res) => {
              SWAL('error', res?.errorCode);
              reject(false);
            },
          });
        }
      });
    },
    allowOutsideClick: true,
  });
};

export const userNamePattern =
  '^(?=[a-zA-Z0-9._]{3,20}$)(?!.*[_.]{2})[^_.].*[^_.]$';
export const numberMoreThanZeroPattern = /^[1-9]\d*(\.\d+)?$/;
export const mustNumberPattern = /^-?\d*(\.\d+)?$/;
declare let Apex;
export const setApexLocale = () => {
  Apex.chart = {
    fontFamily: 'Cairo, sans-serif',
    locales: [
      {
        name: 'ar',
        options: {
          months: [
            'يناير',
            'فبراير',
            'مارس',
            'أبريل',
            'مايو',
            'يونيو',
            'يوليو',
            'أغسطس',
            'سبتمبر',
            'أكتوبر',
            'نوفمبر',
            'ديسمبر',
          ],
          shortMonths: [
            'يناير',
            'فبراير',
            'مارس',
            'أبريل',
            'مايو',
            'يونيو',
            'يوليو',
            'أغسطس',
            'سبتمبر',
            'أكتوبر',
            'نوفمبر',
            'ديسمبر',
          ],
          days: [
            'الأحد',
            'الإثنين',
            'الثلاثاء',
            'الأربعاء',
            'الخميس',
            'الجمعة',
            'السبت',
          ],
          shortDays: [
            'أحد',
            'إثنين',
            'ثلاثاء',
            'أربعاء',
            'خميس',
            'جمعة',
            'سبت',
          ],
          toolbar: {
            exportToSVG: 'تحميل بصيغة SVG',
            exportToPNG: 'تحميل بصيغة PNG',
            exportToCSV: 'تحميل بصيغة CSV',
            menu: 'القائمة',
            selection: 'تحديد',
            selectionZoom: 'تكبير التحديد',
            zoomIn: 'تكبير',
            zoomOut: 'تصغير',
            pan: 'تحريك',
            reset: 'إعادة التعيين',
          },
        },
      },
    ],
    defaultLocale: 'ar',
    colors: ['#089E4B', '#39CF63', '#5B5C5C26'],
  };
};

export function formatCurrencyLiteral(value: number) {
  let result = '';
  if (value > 1000000000) {
    result = `${(value / 1000000000).toFixed(0)} B`;
  } else if (value > 1000000) {
    result = `${(value / 1000000).toFixed(0)} M`;
  } else if (value > 1000) {
    result = `${(value / 1000).toFixed(0)} K`;
  } else {
    result = `${value}`;
  }

  return result + '';
}
