import { Document, Schema, model, models } from "mongoose";

export interface IImage extends Document {
    title: string;
    transformationType: string;
    publicId: string;
    secureUrl: URL;
    transformationUrl?: URL;
    width?: number;
    height?: number;
    config?: object;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author: {
        _id: string;
        firstName: string;
        lastName: string;
    };
    createdAt?: Date;
    updatedAt?: Date;
}


const ImageSchema = new Schema<IImage>(
    {
        title: { type: String, require: true },
        transformationType: { type: String, require: true },
        publicId: { type: String, require: true },
        secureUrl: { type: URL, require: true },
        transformationUrl: { type: URL },
        width: { type: Number },
        height: { type: Number },
        config: { type: Object },
        aspectRatio: { type: String },
        color: { type: String },
        prompt: { type: String },
        author: { type: Schema.Types.ObjectId, ref: 'User' }
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const Image = models?.image || model('Image', ImageSchema)

export default Image;