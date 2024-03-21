import { Button, ColorPicker, Form, Input, InputNumber } from "antd";
import Image from "next/image";

function CreateFieldActivity() {
    const [form] = Form.useForm();
    return (
        <Form form={form} layout="vertical" className="flex items-center gap-2">
            <Form.Item name="color">
                <ColorPicker defaultValue='#000' disabledAlpha />
            </Form.Item>

            <Form.Item label="Lĩnh vực" name="field">
                <Input />
            </Form.Item>

            <Form.Item label="%" name="percent" >
                <InputNumber max={100}  />
            </Form.Item>

            <Button type="text" icon={
                <Image src='/images/icons/trash.png' alt="delete" width={22} height={22} />
            } />
        </Form>
    );
}

export default CreateFieldActivity;
