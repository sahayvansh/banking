import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col">
        <div className="profile-banner">
          <div className="profile-img-container">
            <div className="profile-img">
              <span>{user.firstName[0]}</span>
            </div>
          </div>
        </div>
        <div className="profile">
          <div className='profile-details'>
            <h1 className="profile-name">
              {user.firstName} {user.lastName}
            </h1>
            <p className='profile-email'>
              {user.email}
            </p>
          </div>
        </div>
      </section>
      <section className='banks'>
        <div className='flex w-full justify-between'>
          <h2 className='header-2'>My Banks</h2>
          <div className='flex items-center gap-1'>
            <Link href="/" className='flex items-center'>
              <Image
                src="/icons/plus.svg"
                width={20}
                height={20}
                alt="plus"
              />
              <h2 className='text-14 font-semibold text-gray-600'>
                Add Bank
              </h2>
            </Link>
          </div>
        </div>
        {banks?.length>0 && (
          <div>

          </div>
        )}
      </section>
    </aside>
  );
};

export default RightSidebar;