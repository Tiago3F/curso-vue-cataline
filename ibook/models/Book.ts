export interface Category {
    id: number
    name: string
}

export interface Page {
    id: number
    text: string
    pageNumber: number
}

export interface Book {
    id: number
    auth: string
    releaseDate: string 
    title: string
    description: string
    cover: string
    categories: Category[]
    pages: Page[]
 }