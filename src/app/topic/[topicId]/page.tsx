"use client";
import React, { useState } from "react";
import ImageButton from "./components/ImageButton";
import TopicHeader from "./components/TopicHeader";
import WhatYouLearn from "./components/WhatYouLearn";

const MOCK_TOPIC_DATA = {
    id: "123",
    title: "Belajar Dasar Coding",
    short_description: "Belajar pemrograman dasar untuk pemula",
    rating: 4.,
    details: "Pada materi ini pelajar akan diperkenalkan dengan dasar-dasar pemgrograman. Topik yang akan dibahas pada materi ini akan berupa bagaimana cara membuat HTML sederhana serta pengenalan tentang repository Git.",
    link: "https://www.youtube.com/embed/iA8lLwmtKQM?list=PLZS-MHyEIRo59lUBwU-XHH7Ymmb04ffOY",
    image_url: "https://via.placeholder.com/150"
}

const TopicPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <ImageButton image_url={MOCK_TOPIC_DATA.image_url} title={MOCK_TOPIC_DATA.title} link={MOCK_TOPIC_DATA.link} />
            <TopicHeader title={MOCK_TOPIC_DATA.title} short_description={MOCK_TOPIC_DATA.short_description} rating={MOCK_TOPIC_DATA.rating} />
            <WhatYouLearn details={MOCK_TOPIC_DATA.details} />
        </div>
    );
};

export default TopicPage;