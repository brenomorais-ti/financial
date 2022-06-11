import * as C from './styles'

export const TableArea = () => {
    return(
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn width={100}> Date</C.TableHeadColumn>
                    <C.TableHeadColumn width={130}> Category</C.TableHeadColumn>
                    <C.TableHeadColumn> Title</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}> Value</C.TableHeadColumn>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </C.Table>

    );
}