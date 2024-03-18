function ProfileVideo({ listVideo }: { listVideo?: Array<any> }) {
  console.log(listVideo);
  return (
    <div className="mb-4 p-4 bg-white rounded-lg">
      {listVideo ? (
        <div className='flex gap-2 flex-wrap'>
          {listVideo.map((video) => (
            <iframe
              key={video.images}
              width='420'
              height='280'
              src={video.images}
            />
          ))}
        </div>
      ) : (
        <div>Chưa có video nào để hiển thị</div>
      )}
    </div>
  );
}

export default ProfileVideo;
