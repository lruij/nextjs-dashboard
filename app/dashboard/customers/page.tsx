import { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { TableRowSkeleton } from '@/app/ui/skeletons';
import Table from '@/app/ui/customers/table';
// import Search from '@/app/ui/search';

export const metadata: Metadata = {
  title: 'Customers',
};

export default function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      {/* <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search customers..." />
      </div> */}
      <Suspense key={query + currentPage} fallback={<TableRowSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
    </div>
  );
}
