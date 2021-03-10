import ReactExport from 'react-export-excel';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

const Download = ({ lease, fileName }) => {
  return (
    <ExcelFile
      filename={fileName}
      element={<button>Download Schedules</button>}
    >
      <ExcelSheet dataSet={lease} name="Organization" />
    </ExcelFile>
  );
};

export default Download;
