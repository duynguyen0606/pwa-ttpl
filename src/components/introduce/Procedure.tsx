import Image from 'next/image';
import ImageLegacy from 'next/legacy/image';

type ProcedureType = {
  title: string;
  description: string;
  bannerLink: string;
  dataNav: Array<{ title: string; icon: string; desc: string }>;
  id: string;
};

function Procedure(props: ProcedureType) {
  const { title, dataNav, bannerLink, description, id } = props;
  console.log(id);
  return (
    <div id={id} className='procedure text-center pb-20'>
      <div className='text-2xl font-semibold'>
        <span className='title relative'>{title}</span>
      </div>
      <p className='py-4'>{description}</p>
      <div className='w-1/2 m-auto'>
        <ImageLegacy
          src={bannerLink}
          layout='responsive'
          width={990}
          height={590}
        />
      </div>
      <div className='grid grid-cols-3 gap-6'>
        {dataNav.map((item) => (
          <div key={item.title} className='rounded-xl p-6 bg-white text-left'>
            <Image src={item.icon} width={50} height={50} alt='icon' />
            <div className='text-xl font-semibold py-4'>{item.title}</div>
            <div>{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Procedure;
