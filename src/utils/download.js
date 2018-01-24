import XLSX from 'xlsx'
import { saveAs } from 'file-saver'

export function downloadExcel (data) {
  const workbook = XLSX.utils.book_new()
  const worksheet = XLSX.utils.aoa_to_sheet(data)
  XLSX.utils.book_append_sheet(workbook, worksheet, 'mapLocation.sjfkai.com')

  const wopts = { bookType:'xlsx', bookSST:false, type:'array' }
  const wbout = XLSX.write(workbook,wopts)
  saveAs(new Blob([wbout],{type: 'application/octet-stream'}), 'map-location.xlsx')
}