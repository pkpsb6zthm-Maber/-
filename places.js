
// قائمة الأماكن الشاملة في المملكة العربية السعودية منصة معبر
const placesData = [
  // ==================== جدة ====================
  // مستشفيات جدة
  {
    id: 1,
    name: "مستشفى الملك فهد القوات المسلحة",
    city: "جدة",
    category: "مستشفيات",
    lat: 21.5175,
    lng: 39.1725,
    accessibility: { hasElevator: true, hasParking: true, hasRestroom: true }
  },
  {
    id: 2,
    name: "مستشفى الملك فيصل التخصصي",
    city: "جدة",
    category: "مستشفيات",
    lat: 21.5583,
    lng: 39.1415,
    accessibility: { hasElevator: true, hasParking: true, hasRestroom: true }
  },
  {
    id: 3,
    name: "مستشفى جدة الوطني الجديد",
    city: "جدة",
    category: "مستشفيات",
    lat: 21.5381,
    lng: 39.1860,
    accessibility: { hasElevator: true, hasParking: true, hasRestroom: true }
  },
  {
    id: 4,
    name: "مستشفى الدكتور سليمان فقيه",
    city: "جدة",
    category: "مستشفيات",
    lat: 21.5542,
    lng: 39.1328,
    accessibility: { hasElevator: true, hasParking: true, hasRestroom: true }
  },

  // جامعات جدة
  {
    id: 5,
    name: "جامعة الملك عبد العزيز",
    city: "جدة",
    category: "جامعات",
    lat: 21.4931,
    lng: 39.2502,
    accessibility: { hasElevator: true, hasParking: true, hasRestroom: true }
  },
  {
    id: 6,
    name: "جامعة جدة",
    city: "جدة",
    category: "جامعات",
    lat: 21.7588,
    lng: 39.2132,
    accessibility: { hasElevator: true, hasParking: true, hasRestroom: true }
  },
  {
    id: 7,
    name: "جامعة دار الحكمة",
    city: "جدة",
    category: "جامعات",
    lat: 21.4792,
    lng: 39.2078,
    accessibility: { hasElevator: true, hasParking: true, hasRestroom: true }
  },

  // دوائر حكومية في جدة
  {
    id: 8,
    name: "إمارة منطقة مكة المكرمة - فرع جدة",
    city: "جدة",
    category: "دوائر حكومية",
    lat: 21.5430,
    lng: 39.1728,
    accessibility: { hasElevator: true, hasParking: true, hasRestroom: true }
  },
  {
    id: 9,
    name: "أمانة محافظة جدة",
    city: "جدة",
    category: "دوائر حكومية",
    lat: 21.5202,
    lng: 39.1678,
    accessibility: { hasElevator: true, hasParking: true, hasRestroom: true }
  },
  {
    id: 10,
    name: "جوازات محافظة جدة (الرحاب)",
    city: "جدة",
    category: "دوائر حكومية",
    lat: 21.5615,
    lng: 39.2085,
    accessibility: { hasElevator: true, hasParking: true, hasRestroom: true }
  },

  // مطاعم وكافيهات جدة
  {
    id: 11,
    name: "مطعم البيك - الكورنيش",
    city: "جدة",
    category: "مطاعم",
    lat: 21.5305,
    lng: 39.1450,
    accessibility: { hasElevator: true, hasParking: true, hasRestroom: true }
  },
  {
    id: 12,
    name: "مطعم خيال - فرع الأمير سلطان",
    city: "جدة",
    category: "مطاعم",
    lat: 21.6035,
    lng: 39.1360,
    accessibility: { hasElevator: true, hasParking: true, hasRestroom: true }
  },
  {
    id: 13,
    name: "برو جراوند كافيه (Pro Ground)",
    city: "جدة",
    category: "كافيهات",
    lat: 21.5780,
    lng: 39.1310,
    accessibility: { hasElevator: false, hasParking: true, hasRestroom: true }
  },
  {
    id: 14,
    name: "برو brew 92 كافيه",
    city: "جدة",
    category: "كافيهات",
    lat: 21.6021,
    lng: 39.1285,
    accessibility: { hasElevator: true, hasParking: true, hasRestroom: true }
  },

  // ==================== الرياض ====================
  {
    id: 15,
    name: "مستشفى الملك فيصل التخصصي",
    city: "الرياض",
    category: "مستشفيات",
    lat: 24.6713,
    lng: 46.6781,
    accessibility: { hasElevator: true, hasParking: true, hasRestroom: true }
  },
  {
    id: 16,
    name: "مدينة الملك فهد الطبية",
    city: "الرياض",
    category: "مستشفيات",
    lat: 24.6908,
    lng: 46.7042,
    accessibility: { hasElevator: true, hasParking: true, hasRestroom: true }
  },
  {
    id: 17,
    name: "جامعة الملك سعود",
    city: "الرياض",
    category: "جامعات",
    lat: 24.7162,
    lng: 46.6186,
    accessibility: { hasElevator: true, hasParking: true, hasRestroom: true }
  },
  {
    id: 18,
    name: "جامعة الأميرة نورة بنت عبد الرحمن",
    city: "الرياض",
    category: "جامعات",
    lat: 24.8480,
    lng: 46.7248,
    accessibility: { hasElevator: true, hasParking: true, hasRestroom: true }
  },
  {
    id: 19,
    name: "وزارة الداخلية",
    city: "الرياض",
    category: "دوائر حكومية",
    lat: 24.6644,
    lng: 46.6970,
    accessibility: { hasElevator: true, hasParking: true, hasRestroom: true }
  },
  {
    id: 20,
    name: "عنوان القهوة (Address Cafe)",
    city: "الرياض",
    category: "كافيهات",
    lat: 24.7551,
    lng: 46.6432,
    accessibility: { hasElevator: false, hasParking: true, hasRestroom: true }
  },

  // ==================== مكة المكرمة ====================
  {
    id: 21,
    name: "جامعة أم القرى - العابدية",
    city: "مكة المكرمة",
    category: "جامعات",
    lat: 21.3262,
    lng: 39.9534,
    accessibility: { hasElevator: true, hasParking: true, hasRestroom: true }
  },
  {
    id: 22,
    name: "مستشفى النور التخصصي",
    city: "مكة المكرمة",
    category: "مستشفيات",
    lat: 21.3820,
    lng: 39.8512,
    accessibility: { hasElevator: true, hasParking: true, hasRestroom: true }
  },
  {
    id: 23,
    name: "أمانة العاصمة المقدسة",
    city: "مكة المكرمة",
    category: "دوائر حكومية",
    lat: 21.3891,
    lng: 39.8579,
    accessibility: { hasElevator: true, hasParking: true, hasRestroom: true }
  },

  // ==================== أبها وعسير ====================
  {
    id: 24,
    name: "مستشفى عسير المركزي",
    city: "أبها",
    category: "مستشفيات",
    lat: 18.2165,
    lng: 42.5053,
    accessibility: { hasElevator: true, hasParking: true, hasRestroom: true }
  },
  {
    id: 25,
    name: "جامعة الملك خالد - الفرع الرئيسي",
    city: "أبها",
    category: "جامعات",
    lat: 18.2464,
    lng: 42.5574,
    accessibility: { hasElevator: true, hasParking: true, hasRestroom: true }
  },
  {
    id: 26,
    name: "إمارة منطقة عسير",
    city: "أبها",
    category: "دوائر حكومية",
    lat: 18.2161,
    lng: 42.5050,
    accessibility: { hasElevator: true, hasParking: true, hasRestroom: true }
  },
  {
    id: 27,
    name: "مطعم الرومانسية - أبها",
    city: "أبها",
    category: "مطاعم",
    lat: 18.2325,
    lng: 42.5121,
    accessibility: { hasElevator: true, hasParking: true, hasRestroom: true }
  },

  // ==================== المنطقة الشرقية ====================
  {
    id: 28,
    name: "جامعة الملك فهد للبترول والمعادن",
    city: "الظهران",
    category: "جامعات",
    lat: 26.3045,
    lng: 50.1423,
    accessibility: { hasElevator: true, hasParking: true, hasRestroom: true }
  },
  {
    id: 29,
    name: "مستشفى الملك فهد التخصصي",
    city: "الدمام",
    category: "مستشفيات",
    lat: 26.4102,
    lng: 50.0812,
    accessibility: { hasElevator: true, hasParking: true, hasRestroom: true }
  },
  {
    id: 30,
    name: "أمانة المنطقة الشرقية",
    city: "الدمام",
    category: "دوائر حكومية",
    lat: 26.4341,
    lng: 50.1082,
    accessibility: { hasElevator: true, hasParking: true, hasRestroom: true }
  }
];
