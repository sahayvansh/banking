import Link from 'next/link'
import React from 'react'
import { formatAmount } from '@/lib/utils'
import Image from 'next/image'

const BankCard = ({account, userName, showBalance = true}: CreditCardProps) => {
  return (
    <div className='flex flex-col'>
      <Link href="/" className='bank-card'>
        <div className='bank-card_content'>
          <div>
            <h1 className='text-xl font-bold text-white mb-2'>
              {account.name || userName}
            </h1>
            <p className="font-ibm-plex-serif text-2xl font-black text-white">
              {formatAmount(account.currentBalance)}
            </p>
          </div>
          <article className='flex flex-col gap-2'>
            <div className='flex justify-between'>
              <h1 className='text-sm font-semibold text-white'>
                {userName}
              </h1>
              <h2 className='text-sm font-semibold text-white'>
                •• / ••
              </h2>
            </div>
            <p className='text-base font-semibold tracking-wider text-white'>
              •••• •••• •••• <span className='text-lg'>1234</span>
            </p>
          </article>
        </div>
        <div className='bank-card-icon flex flex-col justify-between'>
          <div className="flex items-center justify-end space-x-4">
            <Image
              src="/icons/Paypass.svg"
              width={40}
              height={24}
              alt="pay"
            />
            <Image
              src="/icons/mastercard.svg"
              width={35}
              height={48}
              alt="mastercard"
            />
          </div>
          <Image
            src="/icons/lines.png"
            width={316}
            height={190}
            alt="lines"
            className='absolute top-0 left-0'
          />
        </div>
      </Link>
    </div>
  )
}

export default BankCard