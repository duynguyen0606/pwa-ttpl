'use client';

import { useState, useEffect } from 'react';
import ProcedureSlug from '@/src/components/procedure-slug';
import { apiGetProcedureContentDesktop } from '@/src/api/procedure';
import CanBackLayout from '@/src/components/layout/mobile/CanBackLayout';

function Index({ params }: { params: { slug: string } }) {
  const [dataContent, setDataContent] = useState();
  useEffect(() => {
    (async () => {
      const dataRes = await apiGetProcedureContentDesktop(params.slug);
      if (dataRes.data?.actual_implementation) {
        setDataContent({
          ...dataRes.data.actual_implementation,
          author: dataRes.data.author,
        });
      }
    })();
  }, [params.slug]);
  return (
    <CanBackLayout back='/mobile' title='Chi tiết thủ tục'>
      <ProcedureSlug procedureId={params.slug} data={dataContent} />
    </CanBackLayout>
  );
}

export default Index;
