import * as C from './styles'

export const TableArea = () => {
    return(
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn> Date</C.TableHeadColumn>
                    <C.TableHeadColumn> Category</C.TableHeadColumn>
                    <C.TableHeadColumn> Title</C.TableHeadColumn>
                    <C.TableHeadColumn> Value</C.TableHeadColumn>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </C.Table>

    );
}