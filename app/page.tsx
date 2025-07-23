import React from 'react'
import { ProfileCard, ProfileCardProps } from '@/components/dashboard/post-card'
import { StarBorder } from '@/components/common/star-border'

const sampleProfiles: ProfileCardProps[] = [
  {
    name: 'Alex Thompson',
    role: 'UI/UX Designer',
    status: 'online',
    avatar: '/memoji-alex.png',
    tags: ['Premium'],
    isVerified: true,
    followers: 1240,
  },
  {
    name: 'Michael Chen',
    role: 'Frontend Developer',
    status: 'online',
    avatar: '/memoji-michael.png',
    tags: ['Guest'],
    isVerified: false,
    followers: 856,
  },
  {
    name: 'Emily Wilson',
    role: 'Product Manager',
    status: 'away',
    avatar: '/memoji-emily.png',
    tags: ['Premium'],
    isVerified: true,
    followers: 2100,
  },
  {
    name: 'David Rodriguez',
    role: 'Marketing Specialist',
    status: 'offline',
    avatar: '/memoji-david.png',
    tags: ['Guest'],
    isVerified: false,
    followers: 432,
  },
  {
    name: 'Sara Lee',
    role: 'Backend Developer',
    status: 'online',
    avatar: '/memoji-sara.png',
    tags: ['Premium'],
    isVerified: true,
    followers: 1780,
  },
  {
    name: 'Chris Evans',
    role: 'QA Engineer',
    status: 'away',
    avatar: '/memoji-chris.png',
    tags: ['Guest'],
    isVerified: false,
    followers: 620,
  },
]

export default function page() {
  return (
    <div className="flex flex-col items-center min-h-screen pt-8 bg-transparent">
      {/* Responsive grid of cards */}
      <StarBorder>hello</StarBorder>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {sampleProfiles.map((profile, idx) => (
          <ProfileCard key={profile.name + idx} {...profile} />
        ))}
      </div>
    </div>
  )
}
