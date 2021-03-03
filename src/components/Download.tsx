import ReactExport from 'react-export-excel';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

const Download = ({ lease }) => {
  return (
    <ExcelFile>
      <ExcelSheet dataSet={lease} name="Organization" />
    </ExcelFile>
  );
};

export default Download;
