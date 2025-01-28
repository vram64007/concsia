"use client";

import React, { useState } from "react";
import CausesCard, { Cause } from "../../../../components/causecard";
import { NewspaperIcon, UserGroupIcon } from "@heroicons/react/16/solid";
import { useParams } from "next/navigation";
import { param } from "framer-motion/client";
import { PostPreview } from "../../../../components/testing";

const causes: Cause[] = [
  {
    id: "positive-news",
    title: "Positive News / Positive Thoughts Board",
    description:
      "A digital platform dedicated to spreading hope and inspiration.",
    items: [
      {
        text: "Global Positive News Network",
        link: "https://www.goodnewsnetwork.org/",
      },
      {
        text: "Positive News Magazine",
        link: "https://positive.news/",
      },
      {
        text: "Happy News Website",
        link: "https://www.happynews.com/",
      },
    ],
    icon: <NewspaperIcon className="w-10 h-10" />,
  },
  {
    id: "community-groups",
    title: "Community Groups",
    description: "Building stronger connections through inclusive initiatives.",
    items: [
      {
        text: "Meetup Community Platforms",
        link: "https://www.meetup.com/",
      },
      {
        text: "Local Community Finder",
        link: "https://www.nextdoor.com/",
      },
      {
        text: "Volunteer Match",
        link: "https://www.volunteermatch.org/",
      },
    ],
    icon: <UserGroupIcon className="w-10 h-10" />,
  },
  {
    id: "new_id",
    title: "Community Groups",
    description: "Building stronger connections through inclusive initiatives.",
    items: [
      {
        text: "Meetup Community Platforms",
        link: "https://www.meetup.com/",
      },
      {
        text: "Local Community Finder",
        link: "https://www.nextdoor.com/",
      },
      {
        text: "Volunteer Match",
        link: "https://www.volunteermatch.org/",
      },
    ],
    icon: <UserGroupIcon className="w-10 h-10" />,
  },
  {
    id: "fourth_id",
    title: "Community Groups",
    description: "Building stronger connections through inclusive initiatives.",
    items: [
      {
        text: "Meetup Community Platforms",
        link: "https://www.meetup.com/",
      },
      {
        text: "Local Community Finder",
        link: "https://www.nextdoor.com/",
      },
      {
        text: "Volunteer Match",
        link: "https://www.volunteermatch.org/",
      },
    ],
    icon: <UserGroupIcon className="w-10 h-10" />,
  },
];

export default function Home() {
  const params = useParams();

  const [selectedCause, setSelectedCause] = useState<string | null>(null);

  const handleCauseSelect = (id: string) => {
    setSelectedCause(selectedCause === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-center font-bold text-3xl">{params.name}</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {causes.map((cause) => (
            <CausesCard
              key={cause.id}
              cause={cause}
              onSelect={handleCauseSelect}
              isSelected={selectedCause === cause.id}
            />
          ))}
          <PostPreview text="hello there" author="vani" title="tried" />
        </div>
      </main>
    </div>
  );
}
