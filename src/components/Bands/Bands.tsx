import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { BandList } from "./BandList/BandList"
import { BandList2 } from './BandList/BandList2';
import s from './Bands.module.scss'
import './react-tabs.scss';

export const Bands: React.FC = () => {
    return (
        <div className={s.bandsContainer}>
            <Tabs className={s.bandsCenter}>
                <div className={s.bandsHeader}>
                    <h2>/ Участники</h2>
                    <TabList>
                        <Tab>/ 13 августа</Tab>
                        <Tab>/ 14 августа</Tab>
                    </TabList>
                </div>
                <TabPanel>
                    <BandList />
                </TabPanel>
                <TabPanel>
                    <BandList2 />
                </TabPanel>
            </Tabs>
        </div>
    )
}