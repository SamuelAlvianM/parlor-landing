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
  }

  interface WahanaResponse {
    status: string
    message: string | null
    result: {
      current_page: number
      data: Wahana[]
    }
  }
}

export interface ApiResponse {
  status?:string
  result?:any
  message?:string | boolean
}

export {}
