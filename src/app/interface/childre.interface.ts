export interface Children {
    name?: string
    id?: number
    parentId?: any
    hijos?: Hijo[]
  }
  
  export interface Hijo {
    name: string
    id: number
    parentId: number
    hijos: Hijo2[]
  }
  
  export interface Hijo2 {
    name: string
    id: number
    parentId: number
    hijos: Hijo3[]
  }
  
  export interface Hijo3 {
    name: string
    id: number
    parentId: number
    hijos: Hijo4[]
  }
  
  export interface Hijo4 {
    name: string
    id: number
    parentId: number
    hijos: Hijo5[]
  }
  
  export interface Hijo5 {
    name: string
    id: number
    parentId: number
    hijos: Hijo6[]
  }
  
  export interface Hijo6 {
    name: string
    id: number
    parentId: number
    hijos: any[]
  }
  