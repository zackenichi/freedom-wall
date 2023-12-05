import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

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
          const querySnaphot = await getDocs(msgRef);
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
    }),
  }),
});

export const { useFetchMessagesQuery, useCreateMessageMutation } =
  messageApiSlice;
