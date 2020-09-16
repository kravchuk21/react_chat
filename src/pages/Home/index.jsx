import React from 'react';
import {Message, Dialogs} from "components";

import "./Home.scss"

const Home = () => {
    return (
        <section className="home">
            <Dialogs
                userId={0}
                items={[
                    {
                        _id: Math.random(),
                        text: "Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюша",
                        created_at: "Tue Sep 16 2020 10:42:27",
                        user: {
                            _id: 1,
                            fullName: "Фёдор Достоевский",
                            avatar: null,
                            isOnline: true
                        },
                    }, {
                        _id: Math.random(),
                        text: "Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюша",
                        created_at: "Tue Sep 14 2020 10:42:27",
                        user: {
                            _id: 1,
                            fullName: "Алексей",
                            avatar: "https://sun9-16.userapi.com/ARM_GGqMswM0eiw_NjET_aPy3TYPZ0jGF1vD3Q/xj_fEu4Mmq8.jpg"
                        },
                    },
                ]}/>
            <Message avatar="https://sun9-73.userapi.com/t4_Cw3QgmkbFPRLX791DGFREZrlsf3lgVC3c7g/7wVxM7f0Qr8.jpg"
                     text="Салам, Брут! Чё, как, уничтожил флот галлов? 🖐🏻"
                     date="Sun Sep 15 2020 10:40:12 GMT+0300"
                     attachments={[
                         {
                             filename: "image.jpg",
                             url: "https://source.unsplash.com/user/erondu/101x100",
                         }, {
                             filename: "image.jpg",
                             url: "https://source.unsplash.com/user/erondu/100x101",
                         }, {
                             filename: "image.jpg",
                             url: "https://source.unsplash.com/user/erondu/100x100",
                         }
                     ]}/>
            <Message avatar="https://sun9-73.userapi.com/t4_Cw3QgmkbFPRLX791DGFREZrlsf3lgVC3c7g/7wVxM7f0Qr8.jpg"
                     date="Sun Sep 13 2020 14:37:32 GMT+0300"
                     audio="https://notificationsounds.com/soundfiles/069059b7ef840f0c74a814ec9237b6ec/file-de_vuvuzela-power-down.mp3"/>
            <Message avatar="https://sun9-73.userapi.com/t4_Cw3QgmkbFPRLX791DGFREZrlsf3lgVC3c7g/7wVxM7f0Qr8.jpg"
                     date="Sun Sep 13 2020 14:39:32 GMT+0300"
                     audio="https://notificationsounds.com/soundfiles/069059b7ef840f0c74a814ec9237b6ec/file-de_vuvuzela-power-down.mp3"/>
            {/*<Message avatar="https://sun9-16.userapi.com/ARM_GGqMswM0eiw_NjET_aPy3TYPZ0jGF1vD3Q/xj_fEu4Mmq8.jpg"*/}
            {/*         text="Салам, брат Цезарь!"*/}
            {/*         date="Sun Sep 13 2020 18:49:30 GMT+0300"*/}
            {/*         isMe={true}*/}
            {/*         isReaded={true}/>*/}
            {/*<Message avatar="https://sun9-16.userapi.com/ARM_GGqMswM0eiw_NjET_aPy3TYPZ0jGF1vD3Q/xj_fEu4Mmq8.jpg"*/}
            {/*         text="Всё норм! Флот построили на Лауре. Галлов добили после вашего нападения. Спс! 🔥"*/}
            {/*         date="Sun Sep 13 2020 18:50:12 GMT+0300"*/}
            {/*         isMe={true}*/}
            {/*         isReaded={true}/>*/}
            {/*<Message avatar="https://sun9-73.userapi.com/t4_Cw3QgmkbFPRLX791DGFREZrlsf3lgVC3c7g/7wVxM7f0Qr8.jpg"*/}
            {/*         text="Да нзч! Ок, держи в курсе."*/}
            {/*         date="Sun Sep 13 2020 18:51:15 GMT+0300"/>*/}
            {/*<Message avatar="https://sun9-16.userapi.com/ARM_GGqMswM0eiw_NjET_aPy3TYPZ0jGF1vD3Q/xj_fEu4Mmq8.jpg"*/}
            {/*         text=" Ave Caesar! Morituri te salutant! ☝"*/}
            {/*         date="Sun Sep 13 2020 18:53:49 GMT+0300"*/}
            {/*         isMe={true}*/}
            {/*         isReaded={false}/>*/}
            <Message avatar="https://sun9-16.userapi.com/ARM_GGqMswM0eiw_NjET_aPy3TYPZ0jGF1vD3Q/xj_fEu4Mmq8.jpg"
                     text=" Ave Caesar! Morituri te salutant! ☝"
                     attachments={[
                         {
                             filename: "image.jpg",
                             url: "https://source.unsplash.com/user/erondu/101x100",
                         },
                     ]}/>
            <Message avatar="https://sun9-16.userapi.com/ARM_GGqMswM0eiw_NjET_aPy3TYPZ0jGF1vD3Q/xj_fEu4Mmq8.jpg"
                     isTyping/>
        </section>
    );
};

export default Home;