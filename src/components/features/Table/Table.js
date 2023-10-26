

const Table = () => {


return (

    <div>  
        <h1 className="py-4">Table{id}</h1>
        <Form style={{ width: '50rem' }} onSubmit={handleSubmit}>

            <Form.Group as={Row} >

                <Stack direction="horizontal" gap={2} className="mb-2">
                    <Form.Label ><b>Status:</b></Form.Label>
                    <Col sm={4} className="px-3" >
                    <Form.Select  value={status} onChange={e => setTableStatus(e.target.value)}>
                    </Form.Select>
                    </Col>
                </Stack>

                <Stack direction="horizontal" gap={3} className="mb-2" style={{ width: '15rem' }}>
                    <Form.Label><b>People:</b></Form.Label>
                    <Col xs={5} className="d-flex align-items-center">
                        <Form.Control className="form-control form-control-sm" value={peopleAmount} onChange={e => setPeopleAmount(e.target.value)}/>
                        <p className="mb-0 mr-1 px-1" style={{ fontSize: '15px' }}>/</p>
                        <Form.Control className="form-control form-control-sm" value={maxPeopleAmount} onChange={e => setMaxPeopleAmount(e.target.value)} />
                    </Col>
                </Stack>

                <Stack direction="horizontal" gap={3}>
                    <Form.Label className="pt-1"><b>Bill:</b></Form.Label>
                    <Col xs={1} className="d-flex align-items-center mx-4 px-2" >
                        <p className="mb-0 mr-1 px-1" style={{ fontSize: '15px' }}>$</p>
                        <Form.Control className="form-control form-control-sm" value={bill} onChange={e => setBill(e.target.value)}/>
                    </Col>
                </Stack>

            </Form.Group>
            <Button type="submit" variant="primary" className="mx-1 mt-5">{actionText}</Button>
        </Form>
   
    </div>
)

}

export default Table;