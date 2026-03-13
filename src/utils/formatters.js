export const formatPeso = (value) => `\u20b1${(Number(value) || 0).toLocaleString('en-PH')}`;

export const getEeShare = (employee) =>
  employee?.ee_total ?? employee?.eeTotal ?? employee?.eeshare ?? employee?.eeShare ?? 0;
export const getErShare = (employee) =>
  employee?.er_total ?? employee?.erTotal ?? employee?.ershare ?? employee?.erShare ?? 0;
export const getPhotoUrl = (employee) => employee?.photo_url ?? employee?.photoUrl ?? null;
