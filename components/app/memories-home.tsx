import { getPhotos } from "@/actions/photo.actions";
import moment from "moment";
import { BgAnimateButton } from "@/components/ui/BgAnimateButton";
import MemoriesMemoryCard from "@/components/app/memories-memory-card";
import MemoreisHomeNoMemories from "./memories-home-no-memories";

const MemoriesHome = async () => {
  const photos = await getPhotos();
  // Group photos by date
  const groupedPhotos = photos.reduce((acc, photo) => {
    const date = moment(photo.createdAt).format("DD MMMM YYYY");
    // @ts-ignore
    if (!acc[date]) {
      // @ts-ignore
      acc[date] = [];
    }
    // @ts-ignore
    acc[date].push(photo);
    return acc;
  }, {});

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-[150px] pb-10">
      {photos && photos.length === 0 ? (
        <MemoreisHomeNoMemories />
      ) : (
        Object.entries(groupedPhotos).map(([date, photos]) => (
          <div key={date} className="border-b border-teal-600 pb-4 mb-4">
            <BgAnimateButton
              animation="spin-fast"
              gradient="candy"
              className="text-lg font-semibold mb-8"
            >
              {date}
            </BgAnimateButton>

            <div className="flex flex-wrap -m-2">
              {/*@ts-ignore*/}
              {photos.map((photo, idx) => (
                <div key={photo.id} className="p-2 w-1/2 md:w-1/3 lg:w-1/4">
                  <MemoriesMemoryCard idx={idx} url={photo.url} id={photo.id} />
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MemoriesHome;
