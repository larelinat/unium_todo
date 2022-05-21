import {Controller, Get, StreamableFile} from '@nestjs/common';
import {createReadStream} from 'fs';
import {join} from 'path';


@Controller('.well-known')
export class WellKnownController {
    @Get("/pki-validation/F07A04B849B5126456C5132165BADEED.txt")
    getFile(): StreamableFile {
        const file = createReadStream(join(process.cwd(), '/src/well-known/F07A04B849B5126456C5132165BADEED.txt'));
        return new StreamableFile(file);
    }

}
