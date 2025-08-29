import type store  from './index'; // استيراد الـ store نفسه

// نوع يمثل state العام لكل slices
export type RootState = ReturnType<typeof store.getState>;

// نوع يمثل الدالة dispatch التابعة للـ store
export type AppDispatch = typeof store.dispatch;