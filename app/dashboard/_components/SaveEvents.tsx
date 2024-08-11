import SaveEventsIcon from "@/components/icons/SaveEventsIcon";

const SaveEvents = () => {
  return (
    <div className="bg-light flex gap-[3px] absolute top-2 right-3 rounded-[4px] p-[5px]">
      <span>
        <SaveEventsIcon />
      </span>
      <p className="text-[10px] font-aeonik">Save eevnt</p>
    </div>
  );
};

export default SaveEvents;
