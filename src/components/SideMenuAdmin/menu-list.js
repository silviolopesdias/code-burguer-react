import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

import paths from '../../constants/paths'

const listLinks = [
  {
    id: 1,
    label: 'Pedidos',
    link: paths.Order,
    icon: ShoppingBagIcon
  },
  {
    id: 2,
    label: 'Listar-produtos',
    link: paths.Products,
    icon: ShoppingCartIcon
  },
  {
    id: 3,
    label: 'Novo Produto',
    link: paths.NewProducts,
    icon: AddShoppingCartIcon
  }
]
export default listLinks
