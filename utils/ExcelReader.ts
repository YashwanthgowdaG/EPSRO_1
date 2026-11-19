
import * as XLSX from 'xlsx';

export function readExcel(filePath: string,sheetName: string): Record<string, unknown>[] {

    const workbook = XLSX.readFile(filePath);

    // Display actual Excel sheet names
    console.log('Available Excel sheets:', workbook.SheetNames);

    const worksheet = workbook.Sheets[sheetName];

    if (!worksheet) {
        throw new Error(`Sheet ${sheetName} not found`);
    }

    return XLSX.utils.sheet_to_json<Record<string, unknown>>(
        worksheet,
        { defval: '' }
    );
}
