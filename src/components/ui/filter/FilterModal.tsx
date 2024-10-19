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

    // handleSearch: () => void;
}

const FilterModal = ({
    open,
    setOpen,
    setLocation,
    setPrice,
    setPracticeType,
    setFacilities,
    setPracticeNeed,
}: // handleSearch,
FilterModalProps) => {
    const handleClose = () => {
        setOpen(false);
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
                    placeholder={'Location'}
                    onChange={setLocation}
                    // handleSearch={handleSearch}
                />
                <CustomSelect
                    options={priceOptions}
                    placeholder={'Price'}
                    onChange={setPrice}
                    // // handleSearch={handleSearch}
                />
                <CustomSelect
                    options={practiceTypeOptions}
                    placeholder={'Practice Type'}
                    onChange={setPracticeType}
                    // // handleSearch={handleSearch}
                />
                <CustomSelect
                    options={practiceNeedOptions}
                    placeholder="Practice Need"
                    onChange={setPracticeNeed}
                    // // handleSearch={handleSearch}
                />
                <CustomSelect
                    options={facilitiesOptions}
                    placeholder={'Facilities'}
                    onChange={setFacilities}
                    // // handleSearch={handleSearch}
                />
            </div>
        </Modal>
    );
};

export default FilterModal;
