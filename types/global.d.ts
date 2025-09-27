declare global {
  interface Wahana {
    id: number
    nama: string
    kode_wahana: string
    image: string
    deskripsi: string | null
    status: string
    imagePath: string
    created_at: string
      pivot: {
        paket_wahana_id: number
        wahana_id: number
        extra: {
          wahana_id: number
          catatan: string
          we_harga: number
          wd_harga: number
        }
      }
    }
  interface PaketWahana extends Wahana {
    nama: string
    wd_harga: number
    we_harga: number
  }
export interface ApiResponse<T = any> {
  status: string
  message: string | null
  result: {
    current_page: number
    data: T[]
  }
}
}



export {}
