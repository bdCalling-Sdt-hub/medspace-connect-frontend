import { Modal } from 'antd';
import { CustomSelect } from './CustomSelect';
import {
      facilitiesOptions,
      locationOptions,
      practiceNeedOptions,
      practiceTypeOptions,
      priceOptions,
} from '@/src/const/const';
import { Dispatch, SetStateAction } from 'react';

interface FilterModalProps {
      open: boolean;
      setOpen: Dispatch<SetStateAction<boolean>>;
      setLocation: (val: string) => void;
      setPrice: (val: string) => void;
      setPracticeType: (val: string) => void;
      setFacilities: (val: string) => void;
      setPracticeNeed: (val: string) => void;
}

const FilterModal = ({
      open,
      setOpen,
      setLocation,
      setPrice,
      setPracticeType,
      setFacilities,
      setPracticeNeed,
}: FilterModalProps) => {
      const handleClose = () => {
            setOpen(false);
      };

      const handleSelectChange = (setter: (val: string) => void) => (value: string) => {
            setter(value); // Set the selected value in the filter
            setOpen(false); // Close the modal after setting the value
      };

      return (
            <Modal
                  title={<p className="p-0.5">Filter :</p>}
                  centered
                  footer={false}
                  open={open}
                  onCancel={handleClose}
                  width={400}
            >
                  <div className="flex flex-col gap-3 items-center">
                        <CustomSelect
                              options={locationOptions}
                              placeholder="Location"
                              onChange={handleSelectChange(setLocation)}
                        />
                        <CustomSelect
                              options={priceOptions}
                              placeholder="Price"
                              onChange={handleSelectChange(setPrice)}
                        />
                        <CustomSelect
                              options={practiceTypeOptions}
                              placeholder="Practice Type"
                              onChange={handleSelectChange(setPracticeType)}
                        />
                        <CustomSelect
                              options={practiceNeedOptions}
                              placeholder="Practice Need"
                              onChange={handleSelectChange(setPracticeNeed)}
                        />
                        <CustomSelect
                              options={facilitiesOptions}
                              placeholder="Facilities"
                              onChange={handleSelectChange(setFacilities)}
                        />
                  </div>
            </Modal>
      );
};

export default FilterModal;
