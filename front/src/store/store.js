import create from 'zustand'

export const useStore = create(set => ({
  itemInPanier:0,
  panierPage:false,
  panier:[],
  addItem: () => set(state => ({ itemInPanier: state.itemInPanier + 1 })),
  pannierItem: (id) => set(state => ({panier:[...state.panier,id]})),
  showPanier: (bolean) => set(state => ({panierPage:bolean})),
}))