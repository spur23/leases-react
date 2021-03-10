import ReactExport from 'react-export-excel';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

const Download = ({ lease }) => {
  return (
    <ExcelFile element={<button>Download Schedules</button>}>
      <ExcelSheet dataSet={lease} name="Organization" />
    </ExcelFile>
  );
};

export default Download;
