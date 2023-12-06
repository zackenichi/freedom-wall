import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  Timestamp,
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../../../firebase/firebase';

export const messageApiSlice = createApi({
  reducerPath: 'message',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Message'],
  endpoints: (builder) => ({
    fetchMessages: builder.query({
      // since we are using fakeBaseQuery we use queryFn
      async queryFn() {
        try {
          const msgRef = collection(db, 'messages');
          const tenMinutesAgo = new Date();
          tenMinutesAgo.setMinutes(tenMinutesAgo.getMinutes() - 10);
          const myQuery = query(
            msgRef,
            orderBy('createdAt', 'desc'),
            where('createdAt', '>=', Timestamp.fromDate(tenMinutesAgo))
          );
          const querySnaphot = await getDocs(myQuery);
          let messages: any[] = [];
          querySnaphot?.forEach((doc) => {
            messages.push({ id: doc.id, ...doc.data() });
          });
          return { data: messages };
        } catch (error: any) {
          console.error(error);
          return { error: error.message };
        }
      },
      providesTags: ['Message'],
    }),
    createMessage: builder.mutation({
      async queryFn(message) {
        try {
          const msgRef = collection(db, 'messages');
          const docRef = await addDoc(msgRef, message);
          return { data: { id: docRef.id, ...message } };
        } catch (error: any) {
          console.error(error);
          return { error: error.message };
        }
      },
      invalidatesTags: ['Message'],
    }),
  }),
});

export const { useFetchMessagesQuery, useCreateMessageMutation } =
  messageApiSlice;
