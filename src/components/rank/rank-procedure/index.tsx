import './style.scss';

function RankProcedure() {
  return (
    <div id='rank-procedure'>
      <div className='flex items-center gap-4 bg-white rounded-xl p-4'>
        <div>#1</div>
        <div className='dot-1 desc'>
          Đề nghị tuyển người lao động Việt Nam vào các vị trí công việc dự kiến
          tuyển người lao động nước ngoài
        </div>
        <div className='px-2 border-x-2 border-black dot-1 desc'>
          Chủ tịch Ủy ban dân dân cấp tỉnh.
        </div>
        <div className='dot-1 desc'>
          Quyết định cho phép nhà thầu được tuyển người lao động nước ngoài vào
          các vị trí công việc không tuyển được người lao động Việt Nam.
        </div>
      </div>
    </div>
  );
}

export default RankProcedure;
